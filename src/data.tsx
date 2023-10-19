import AssignedImg from './assets/images/assigned_to_img.svg'
import ActionIcon from './assets/images/action-icon.svg'



interface TableDataCardProps {
	id: string;
	title: string;
	project: string;
    category:string;
    urgency:string;
    impact:string;
    assigned_to:string;
    status:string;
    date:string;
    action:string;
	
}

interface TableHeadCardProps {
    title: string;
	dataIndex: string;
	
}
export const Columns: Array<TableHeadCardProps>=[
    {
        title:'TicketID',
        dataIndex:'id'
    },
    {
        title:'Title',
        dataIndex:'title'
    },
    {
        title:'Project',
        dataIndex:'project'
    },
    {
        title:'Category',
        dataIndex:'category'
    },
    {
        title:'Urgency',
        dataIndex:'urgency'
    },
    {
        title:'Impact',
        dataIndex:'impact'
    },
    {
        title:'Assigned to',
        dataIndex:'assigned_to'
    },
    {
        title:'Status',
        dataIndex:'status'
    },
    {
        title:'Date',
        dataIndex:'date'
    },
    {
        title:'Action',
        dataIndex:'action'
    },



]
export  const Data: Array<TableDataCardProps> =[
    {
        id:'#457284',
        title:'Payment Screen Issues',
        project:'Project Name',
        category:'Complaint',
        urgency:'Medium',
        impact:'Enterprise',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'12-04-2022',
        action:ActionIcon,
    },
    {
        id:'#940867',
        title:'Settings Page Features',
        project:'Project Name',
        category:'Incident',
        urgency:'Low',
        impact:'User',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'16-07-2022',
        action:ActionIcon,
    },
    {
        id:'#457284',
        title:'Payment Screen Issues',
        project:'Project Name',
        category:'Others',
        urgency:'Medium',
        impact:'Department',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'12-04-2022',
        action:ActionIcon,
    },
    {
        id:'#940867',
        title:'Settings Page Features',
        project:'Project Name',
        category:'Service Request',
        urgency:'High',
        impact:'Multiple Users',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'16-07-2022',
        action:ActionIcon,
    },
    {
        id:'#457284',
        title:'Payment Screen Issues',
        project:'Project Name',
        category:'Request for Change',
        urgency:'Medium',
        impact:'User',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'12-04-2022',
        action:ActionIcon,
    },

]


export  const Data2: Array<TableDataCardProps> =[
    {
        id:'#457284',
        title:'Payment Screen Issues',
        project:'Project Name',
        category:'12-04-2022',
        urgency:'Medium',
        impact:'User',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'12-04-2022',
        action:ActionIcon,
    },
    {
        id:'#940867',
        title:'Settings Page Features',
        project:'Project Name',
        category:'16-07-2022',
        urgency:'Low',
        impact:'16-07-2022',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'16-07-2022',
        action:ActionIcon,
    },
    {
        id:'#457284',
        title:'Payment Screen Issues',
        project:'Project Name',
        category:'12-04-2022',
        urgency:'Medium',
        impact:'12-04-2022',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'12-04-2022',
        action:ActionIcon,
    },
    {
        id:'#940867',
        title:'Settings Page Features',
        project:'Project Name',
        category:'16-07-2022',
        urgency:'High',
        impact:'User',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'16-07-2022',
        action:ActionIcon,
    },
    {
        id:'#457284',
        title:'Payment Screen Issues',
        project:'Project Name',
        category:'12-04-2022',
        urgency:'Medium',
        impact:'12-04-2022',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'12-04-2022',
        action:ActionIcon,
    },
    {
        id:'#940867',
        title:'Settings Page Features',
        project:'Project Name',
        category:'16-07-2022',
        urgency:'Low',
        impact:'16-07-2022',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'16-07-2022',
        action:ActionIcon,
    },
    {
        id:'#457284',
        title:'Payment Screen Issues',
        project:'Project Name',
        category:'12-04-2022',
        urgency:'High',
        impact:'User',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'12-04-2022',
        action:ActionIcon,
    },
    {
        id:'#940867',
        title:'Settings Page Features',
        project:'Project Name',
        category:'16-07-2022',
        urgency:'Low',
        impact:'16-07-2022',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'16-07-2022',
        action:ActionIcon,
    },
    {
        id:'#457284',
        title:'Payment Screen Issues',
        project:'Project Name',
        category:'12-04-2022',
        urgency:'Medium',
        impact:'12-04-2022',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'12-04-2022',
        action:ActionIcon,
    },
    {
        id:'#940867',
        title:'Settings Page Features',
        project:'Project Name',
        category:'16-07-2022',
        urgency:'Critical',
        impact:'User',
        assigned_to:`(${AssignedImg}) Jameson Fedorah Project Owner`,
        status:'Medium',
        date:'16-07-2022',
        action:ActionIcon,
    },
]