import { useState, useCallback } from "react";
import { Table } from "./pages/Table";
import type { GatDataResponseInterface } from "./types/type";

function App() {
  const [data, setData] = useState<GatDataResponseInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.disneyapi.dev/character");
      if (response.status !== 200) {
        throw new Error("Ada error...");
      }
      const result = await response.json();
      console.log(result);
      setData(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto bg-white-50">
      {isLoading ? (
        <button className="button-style opacity-50 cursor-not-allowed">
          Loading...
        </button>
      ) : (
        <button
          type="button"
          onClick={handleData}
          className="button-style  hover:bg-purple-700 cursor-pointer "
        >
          Load Disney Characters
        </button>
      )}
      {data.length <= 0 && !isLoading ? (
        <p className="text-center py-10">Data Tidak Tersedia</p>
      ) : (
        <Table result={data} loading={isLoading} />
      )}
    </div>
  );
}

export default App;
