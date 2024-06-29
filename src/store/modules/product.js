const state = {
    stockDetails : [
    {
    itemNumber: 112,
    itemName : "DELL INSPIRON",
    itemPrice : 70000,
    itemQuantity : 20,
    itemImage: '../images/dell.jpg',
    description: "The Dell Inspiron series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs."
    },
    {
    itemNumber: 121,
    itemName : " macbook",
    itemPrice : 78000,
    itemQuantity : 20,
    itemImage: '../images/mac laptop.jpg',
    description: "The Macbook series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs."
    },
    {
    itemNumber: 12,
    itemName : "DELL INSPIRON",
    itemPrice : 70000,
    itemQuantity : 20,
    itemImage: '../images/BROWN USER.jpg',
    description: "The Dell Inspiron series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs."
    },
    {
    itemNumber: 15,
    itemName : "DELL XPS",
    itemPrice : 98000,
    itemQuantity : 20,
    itemImage: '../images/DELL NIVIDIA.jpg',
    description: "The Dell XPS series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs with graphics card."
    },
    {
    itemNumber: 16,
    itemName : "HP 840 G7",
    itemPrice : 40000,
    itemQuantity : 20,
    itemImage: '../images/ELITEBOOK.jpg',
    description: "Built with a focus on durability, the EliteBook 840 G5 can withstand the wear and tear of everyday use. This makes it ideal for professionals who travel frequently or work in demanding environments.."
    },
    {
    itemNumber: 90,
    itemName : "Macbook with mouse",
    itemPrice : 60000,
    itemQuantity : 4,
    itemImage: '../images/Full mac with mouse.jpg',
    description: "The Dell Inspiron series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs."
    },
    {
    itemNumber: 98,
    itemName : "DELL LATITUDE",
    itemPrice : 70000,
    itemQuantity : 20,
    itemImage: '../images/laptop 3D.jpg',
    description: "The Dell Inspiron series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs."
    },
    {
    itemNumber: 54,
    itemName : "DELL Precision",
    itemPrice : 70000,
    itemQuantity : 20,
    itemImage: '../images/BROWN USER.jpg',
    description: "The Dell Precision series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs."
    },
    {
    itemNumber: 4,
    itemName : "acer",
    itemPrice : 70000,
    itemQuantity : 20,
    itemImage: '../images/acer.jpg',
    description: "The Dell Inspiron series offers a balance of performance and affordability for everyday tasks, with various configurations to suit student, creative, or business needs."
    },
    {
    itemNumber: 27,
    itemName : "Apple's MacBook Air ",
    itemPrice : 100000,
    itemQuantity : 30,
    itemImage: '../images/macbook.jpg',
    description: "Apple's MacBook Air delivers sleek design, powerful performance for everyday tasks, and long battery life, making it a great choice for students, professionals, and anyone on the go."
    },
    {
    itemNumber: 27,
    itemName : "Apple's MacBook Pro  ",
    itemPrice : 190000,
    itemQuantity : 30,
    itemImage: '../images/macbook pro.jpg',
    description: "Apple's MacBook Pro combines pro-level performance with a thin and light design, ideal for creative professionals, developers, and demanding users who need power and portability.."
    },
    {
    itemNumber: 27,
    itemName : "HP ENVY ",
    itemPrice : 150000,
    itemQuantity : 30,
    itemImage: '../images/hp.jpg',
    description: "HP's premium consumer line, featuring high-quality materials, stylish design, and powerful specs suitable for creative professionals"
    },
    {
    itemNumber: 27,
    itemName : "Apple's Retina MacBooks ",
    itemPrice : 150000,
    itemQuantity : 30,
    itemImage: '../images/macbook retina.jpg',
    description: "high-resolution displays featuring a pixel density so high that individual pixels are invisible to the naked eye at a normal viewing distance."
    },
    {
    itemNumber: 27,
    itemName : "DELL VOSTRO ",
    itemPrice : 170000,
    itemQuantity : 30,
    itemImage: '../images/dell vostro.jpg',
    description: "Dell offers a wide variety of laptops catering to different needs and budgets. Here's a breakdown of some of their key laptop types:."
    }
    ],
    }
    const getters = {
    stock: (state) => state.stockDetails,
    }
    const actions = {
    }
    const mutations = {
    }
    export default {
    state,
    getters,
    actions,
    mutations
    }
    