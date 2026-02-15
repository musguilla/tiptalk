
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase env vars');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkMessageStructure() {
    console.log('Fetching one message...');
    const { data, error } = await supabase.from('messages').select('*').limit(1);

    if (error) {
        console.error('Error fetching message:', error);
    } else {
        if (data.length > 0) {
            console.log('Message keys:', Object.keys(data[0]));
        } else {
            console.log('No messages found to inspect.');
        }
    }
}

checkMessageStructure();
