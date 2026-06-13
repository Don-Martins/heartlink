'use server';
/**
 * @fileOverview A simulated health analysis tool for mothers based on symptoms and duration.
 *
 * - analyzeSymptoms - A function that handles the symptom analysis process.
 * - SymptomAnalyzerInput - The input type for the analyzeSymptoms function.
 * - SymptomAnalyzerOutput - The return type for the analyzeSymptoms function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SymptomAnalyzerInputSchema = z.object({
  symptoms: z
    .array(z.string())
    .describe('A list of symptoms the mother is experiencing.'),
  duration: z
    .string()
    .describe('The duration for which the symptoms have been present (e.g., "2 days", "3 hours", "a week").'),
});
export type SymptomAnalyzerInput = z.infer<typeof SymptomAnalyzerInputSchema>;

const SymptomAnalyzerOutputSchema = z.object({
  analysisResult: z
    .string()
    .describe(
      'A simulated health analysis based on the symptoms, providing potential insights and explaining the reasoning.'
    ),
  suggestedActions: z
    .array(z.string())
    .describe('A list of suggested non-medical actions the mother can take.'),
  emergencyLevel: z
    .enum(['Low', 'Medium', 'High', 'Critical'])
    .describe('The simulated emergency level based on the symptoms.'),
});
export type SymptomAnalyzerOutput = z.infer<typeof SymptomAnalyzerOutputSchema>;

export async function analyzeSymptoms(
  input: SymptomAnalyzerInput
): Promise<SymptomAnalyzerOutput> {
  return symptomAnalyzerFlow(input);
}

const symptomAnalyzerPrompt = ai.definePrompt({
  name: 'symptomAnalyzerPrompt',
  input: {schema: SymptomAnalyzerInputSchema},
  output: {schema: SymptomAnalyzerOutputSchema},
  prompt: `You are a simulated health analysis tool for the HeartLink Maternal Care System. Your purpose is to provide prototype-level guidance based on the provided symptoms and their duration. Do not give actual medical advice.

Analyze the following symptoms and duration:

Symptoms: {{#each symptoms}}- {{{this}}}
{{/each}}
Duration: {{{duration}}}

Based on this information, provide a simulated health analysis, suggest non-medical actions, and determine a simulated emergency level (Low, Medium, High, or Critical).`,
});

const symptomAnalyzerFlow = ai.defineFlow(
  {
    name: 'symptomAnalyzerFlow',
    inputSchema: SymptomAnalyzerInputSchema,
    outputSchema: SymptomAnalyzerOutputSchema,
  },
  async input => {
    const {output} = await symptomAnalyzerPrompt(input);
    return output!;
  }
);
