// src/lib/createClient.ts
import { databases, ID } from "./appwrite";


// Define the shape of the client document that you'll be saving.
export interface ClientDocument {
  clientCode: string;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientNotes: string;
}

// Function to add a client document to your Appwrite collection.
// Replace "crm" and "clients" with your own database and collection IDs.
export async function createClient(
  clientData: ClientDocument
): Promise<ClientDocument & { $id: string; $createdAt: string }> {

    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
    const colId = process.env.NEXT_PUBLIC_APPWRITE_CLIENTS_COLLECTION_ID || '';

  const response = await databases.createDocument(
    dbId,        // your Appwrite database ID; update if needed
    colId,    // your Appwrite collection ID for clients; update if needed
    ID.unique(),  // generate a unique ID for the new document
    clientData    // payload containing the client data
  );

  return {
    $id: response.$id,
    $createdAt: response.$createdAt,
    ...clientData,
  };
}
