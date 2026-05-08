import OpenAI from "openai";

const openai = new OpenAI({

  apiKey:
    "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",

  dangerouslyAllowBrowser: true,

});

export async function verifyMission(
  imageBase64
) {

  try {

    const response =
      await openai.responses.create({

        model: "gpt-4o-mini",

        input: [

          {
            role: "user",

            content: [

              {
                type: "input_text",

                text:
`
Does this image contain a dog?

Reply ONLY:

VALID

or

INVALID
`,
              },

              {
                type: "input_image",

                image_url:
                  `data:image/jpeg;base64,${imageBase64}`,
              },

            ],
          },

        ],

      });

    console.log(response);

    const result =
      response.output[0]
        .content[0]
        .text;

    return result;

  } catch (error)  {

  console.error(
    "OPENAI FULL ERROR:",
    error
  );

  return (
    "ERROR: " +
    error.message
  );
}
}