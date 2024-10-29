import { useSQLiteContext, type SQLiteDatabase } from "expo-sqlite";

export type Productdatabase = {
  id: number,
  name: string,
  url: string,
  prince: number
};

export type Nickname ={
name: string

}


export async function iniciarbanco(database: SQLiteDatabase) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS products (
      id NUMBER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      url TEXT NOT NULL,
      prince NUMBER NOT NULL
    );
  `);
}




export function useProduct() {
  const database = useSQLiteContext();

  async function criarbanco(data: Productdatabase) {
    const query = `
      INSERT INTO products (id, name, url, prince)
      VALUES (${data.id}, '${data.name}', '${data.url}', ${data.prince})
    `;
    
    try {
      await database.execAsync(query);
    } catch (error) {
      throw error;
    }
  }

  async function searchbyname(name:string) {
    
    try{
        const query = "SELECT *FROM products WHERE name LIKE ?"
        const responsive = await database.getAllAsync<Productdatabase>(query,`%${name}%`)
        return responsive
        }catch(error){
            throw error
    }
  
  }


  async function remove(id:number) {
    try {
      await database.execAsync("DELETE FROM products WHERE id= " + id)

    }catch(error){
        throw error

    }
  }

  return { criarbanco,searchbyname, remove };
}
