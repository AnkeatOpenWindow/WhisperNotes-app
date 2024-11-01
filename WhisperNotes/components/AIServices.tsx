//import { API_KEY } from '@env';
//import { Audio } from "expo-av";
import { Buffer } from 'buffer';
import * as FileSystem from 'expo-file-system';

//import axios from 'axios';


export async function analyzeText(text: string): Promise<any> {
    //const url = `https://language.googleapis.com/v1/documents:analyzeSyntax?key=${API_KEY}`;

    const document = {
        document: {
            type: 'PLAIN_TEXT',
            content: text,
        },
        encodingType: 'UTF8',
    };

    try {
        //const response = await axios.post(url, document);
        //return response.data;  // Handle the response data
    } catch (error) {
        //console.error('Error in analyzing text:', error);
        //throw error;
    }
}