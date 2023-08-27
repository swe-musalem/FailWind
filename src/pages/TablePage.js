import Table from "../components/Table";




export default function TablePage(params) {

    const data = [
        {name:'Orange',color:'bg-orange-500',score:5},
        {name:'Apple',color:'bg-red-500',score:3},
        {name:'Banana',color:'bg-yellow-500',score:1},
        {name:'Lime',color:'bg-green-500',score:4},
    ];

    const config = [
        {   
            label: 'Name ',
            render: (fruit)=> fruit.name,
        },
        { 
            label: 'Color ',
            render: (fruit)=> <div className={`${fruit.color} p-3 m-2`}></div>,
        },
        { 
            label: 'Score ',
            render: (fruit)=> fruit.score,
        },
    ]

    const keyFn = (fruit)=>{
        return fruit.name
    }

    return <div>
        <Table data={data} config={config} keyFn={keyFn} />
    </div>
}