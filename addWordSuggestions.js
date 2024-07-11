import { readFileSync, writeFileSync } from "fs";
import readline from "readline";

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

async function getWordSuggestions() {
    return await (await fetch("https://dubster.hazelhope.com/api/wordhuntle/suggested_words.json")).json();
}

async function getWordRemovalSuggestions() {
    return await (await fetch("https://dubster.hazelhope.com/api/wordhuntle/suggested_removals.json")).json();
}

function getWordList() {
    const file = readFileSync("src/utils/wordsList.js").toString();
    return JSON.parse(file.replaceAll("const wordsList = ", "").replaceAll(";", "").replaceAll("export default wordsList", ""))
}

const wordSuggestions = await getWordSuggestions();
const wordRemovalSuggestions = await getWordRemovalSuggestions();
let wordList = getWordList();

console.log("Ready to run. Suggested words:\n");
console.log(wordSuggestions.join("\n"), "\n");
console.log("\nSuggested word removals:\n")
console.log(wordRemovalSuggestions.join("\n"), "\n");
await askQuestion("Press ENTER to continue...");

console.log("\nAdding word additions...")
let wordAdditions = 0;
wordSuggestions.forEach(word => {
    if (!wordList.includes(word.toUpperCase())) {
        wordAdditions++;
        wordList.push(word.toUpperCase());
    }
})
console.log("Added " + wordAdditions + " words to the word list.");
console.log("Removing word removals...");
let wordRemovals = 0;
wordRemovalSuggestions.forEach(word => {
    if (wordList.includes(word.toUpperCase())) {
        wordRemovals++;
        wordList = wordList.filter(wordFromWordList => wordFromWordList !== word.toUpperCase())
    }
})
console.log("Removed " + wordRemovals + " words from the word list.");

console.log("\nSorting word list...")
wordList.sort();
console.log("Done sorting")

console.log("\nUpdating wordsList.js...")

writeFileSync("src/utils/wordsList.js", `const wordsList = ${JSON.stringify(wordList)};

export default wordsList;`)

console.log("\nDone.")