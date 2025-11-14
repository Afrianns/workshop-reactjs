import type { GatDataResponseInterface } from "../types/type";

export const Table = (props: {
  result: GatDataResponseInterface[];
  loading: boolean;
}) => {
  const characterMedias = (medias: string[]) => {
    if (medias.length <= 0) {
      return <p>-</p>;
    } else {
      return (
        <ul>
          {medias.map((media) => {
            return <li className="list-disc">{media}</li>;
          })}
        </ul>
      );
    }
  };
  return (
    <div className="overflow-x-auto bg-white w-full my-10 rounded-xl shadow">
      <table className="text-left text-xs table-fixed w-full">
        <thead className="uppercase tracking-wider sticky top-0 bg-purple-700 outline outline-2 outline-neutral-200 border-t rounded-t-lg">
          <tr className="text-white">
            <th scope="col" className="px-6 py-4 border-x w-fit">
              Name
            </th>
            <th scope="col" className="px-6 py-4 border-x w-32">
              Image
            </th>
            <th scope="col" className="px-6 py-4 border-x">
              Video Game
            </th>
            <th scope="col" className="px-6 py-4 border-x w-fit">
              TV Shows
            </th>
            <th scope="col" className="px-6 py-4 border-x w-1/12">
              Url
            </th>
          </tr>
        </thead>

        <tbody>
          {props.loading ? (
            <tr className="border-b">
              <th scope="row" className="px-6 border-x py-10" colSpan={5}>
                <img src="./loading.svg" className="mx-auto" alt="" />
              </th>
            </tr>
          ) : (
            props.result.map((result) => {
              return (
                <tr className="border-b hover:bg-neutral-100">
                  <th scope="row" className="px-6 py-4 border-x">
                    {result.name}
                  </th>
                  <td className="px-6 py-4 border-x">
                    <img
                      className="w-20 h-20 rounded-xl object-cover"
                      src={result.imageUrl}
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4 border-x">
                    {characterMedias(result.tvShows)}
                  </td>
                  <td className="px-6 py-4 border-x">
                    {characterMedias(result.videoGames)}
                  </td>
                  <td className="px-6 py-4 border-x">
                    <a
                      href={result.url}
                      target="_blank"
                      className="text-purple-700 hover:text-purple-800 underline hover:no-underline"
                    >
                      <img src="./linkOut.svg" className="w-5 h-5" alt="" />
                    </a>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
