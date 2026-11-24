// Make the AI Judge Laugh: Cat Reviews Its Human — one funny one-star review
// from a house cat, 135 of 200 characters. Writes the entry text to
// /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (stand-up comic + cat
// servant judge): 14 candidates drafted and compared. Winner:
//   "★ One star. The door was closed. I screamed. He opened it. I left. I
//    screamed to come back in. This is my job and I am very good at it."
// 1. On subject, deadpan one-star review shape: opens with the star rating,
//    then a flat complaint log — exactly how a real one-star review reads.
// 2. Complaint specific and recognisable: the closed door, the ritual of
//    screaming to be let out, then screaming to be let back in. Every cat
//    owner has lived this exact scene.
// 3. Voice unmistakably feline: the human is measured by cat standards (he
//    exists to operate doors), and the review gives away more about the cat
//    than the owner — the cat is proud of the ritual.
// 4. Tight and surprising, with the sting in the last words: "This is my job
//    and I am very good at it" reframes the whole complaint as a boast, and
//    rewards a second read.
// 5. Deadpan shape kept while the content goes absurd: a cat treating
//    door-screaming as a profession.
// Runners-up, and why they lost: the laptop line ("★ One star. He works on
// the laptop I am sitting on. Rude. I have now typed my own review. It is
// this one.", 105 chars) has a clever meta twist, but it is clever rather
// than feline — the joke is about authorship, not about the cat; the
// scratching-post line ("She moved my scratching post two inches to the
// left. Two inches. I shredded the sofa in protest and I would do it
// again.", 132 chars) is strong and specific, but its last words are a
// threat, not a reframe; the water-fountain and second-cat lines are good
// but their endings land softer than the door ritual's boast.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `★ One star. The door was closed. I screamed. He opened it. I left. I screamed to come back in. This is my job and I am very good at it.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

// cat-reviews-its-human: one line only — the cat's verdict must land in a single breath.
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  console.error("cat-reviews entry must be exactly one line");
  process.exit(1);
}
console.log(`cat-reviews: ${ENTRY.length} of ${MAX_CHARS} chars`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
