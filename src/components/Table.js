

export default function Table({data,config,keyFn}) {


    const renderHeaders = config.map((column,data)=>{
        return <th key={column.label}>{column.label}</th>
    })

    const renderdRows = data.map((rowData) => {

        const renderdCells = config.map((column)=>{
            return  <td className="p-2" key={column.label}>{column.render(rowData)}</td>
        })
        
        return <tr className="border-b"  key={keyFn(rowData)}>
            {renderdCells}
        </tr>
    });



    return (
        <table className="text-slate-400 table-auto border-spacing-2">
            <thead>
                <tr className="border-b">
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderdRows}
            </tbody>    
        </table>
    )
}