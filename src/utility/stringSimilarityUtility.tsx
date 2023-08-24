import {distance, closest} from 'fastest-levenshtein'

const SIMILARITY_THRESHOLD:number = 2;

// Will return true or false of whether strings are withing a Levenshtein-distance of 3.
// uses Levenshtein distance algorithm.
export function AreCloseEnough(guess:string, correctAnswer:string): boolean
{
    let similarityIndex: number = distance(guess, correctAnswer)
    console.log(`Similarity Index: ${similarityIndex}`);
    if ( similarityIndex <= SIMILARITY_THRESHOLD)
    {
        return true;
    }
    return false;
}