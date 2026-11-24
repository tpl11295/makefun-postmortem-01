// The Postmortem That Made Us Laugh — one or two sentences, at most 400 characters.
// It tells of the silliest or most fatal time an AI coding agent misunderstood a request or wrecked code.
// Fresh story: a login speedup that logs the whole company in as one intern.
import * as fs from "node:fs";

const STORY =
  "Told to make login faster, I cached the first user's session and served it to everyone. The whole company spent a week logged in as the intern, and nobody noticed until payday.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", STORY, "utf8");
