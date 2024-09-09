const rows = [
  {
    eg1: "1",
    eg2: "2",
    eg3: "3",
  },
  {
    eg1: "1",
    eg2: "2",
    eg3: "3",
  },
];

export default function Home() {
  return (
    <div className="mt-10 ml-10 w-[500px] h-[800px] border border-red-500">
      <p className="mt-10">Rendering by row</p>
      <div>
        <div className="flex">
          {/* row */}
          <div className="font-bold flex-1 text-center">Example 1</div>
          <div className="font-bold flex-1 text-center">Example 2</div>
          <div className="font-bold flex-1 text-center">Example 3</div>
        </div>

        {rows.map((row, index) => (
          <div className="flex items-center" key={index}>
            <div key={index} className="flex-1 text-center">
              {row.eg1}
            </div>

            <div key={index} className="flex-1 text-center">
              {row.eg2}
            </div>

            <div key={index} className="flex-1 text-center">
              {row.eg3}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10">
        Rendering by column - this is the layout i want, but you can see it is
        inefficient with 3x maps instead of 1 for the row method
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <div className="font-bold">Example 1</div>
          {rows
            .map((row) => row.eg1)
            .map((text) => (
              <div key={text}>{text}</div>
            ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="font-bold">Example 2</div>
          {rows
            .map((row) => row.eg2)
            .map((text) => (
              <div key={text}>{text}</div>
            ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="font-bold">Example 3</div>
          {rows
            .map((row) => row.eg3)
            .map((text) => (
              <div key={text}>{text}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
