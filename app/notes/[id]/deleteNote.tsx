'use client'
import PocketBase from 'pocketbase';


export async function DeleteNote(props: any) {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const res = await pb.collection("Posts_list").delete(props);
    return res;

}