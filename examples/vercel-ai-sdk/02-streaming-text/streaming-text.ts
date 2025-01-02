import { streamText } from "ai";
import { smallModel } from "../../_shared/models";

const model = smallModel;

/**
 * Instead of generating the text, we are now streaming it!
 */
export const answerMyQuestion = async (prompt: string) => {
  const { textStream } = await streamText({
    model,
    prompt,
  });

  // The textStream is an AsyncIterable, so it can be
  // iterated over like an array.

  return textStream;
};
