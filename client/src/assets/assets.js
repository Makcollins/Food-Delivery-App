import avocado from './images/avocado.png'
import broccoli from './images/broccoli.png'
import cake from './images/cake.png'
import corn from './images/corn.png'
import juice from './images/juice.png'
import noodle from './images/noodle.png'
import red_cup from './images/red_cup.png'
import potato_chips from './images/potato_chips.png'
import toast from './images/toast.png'

export const assets = {
    avocado,broccoli, cake, corn, juice, noodle,red_cup, potato_chips, toast
}

export const menu_list = [
    {
        menu_name : "Cakes",
        menu_image: cake
    },
    {
        menu_name : "drinks",
        menu_image: juice
    },
    {
        menu_name : "Dinner/Lunch",
        menu_image: noodle
    },
    {
        menu_name : "Breakfast",
        menu_image: red_cup
    },
]

export const food_list =[
    {
        _id: "1",
        name: "Avocado",
        "aggregate_rating": 4.2,
        image: avocado,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Dinner/Lunch"
    },
    {
        _id: "2",
        name: "Broccoli",
        "aggregate_rating": 4.5,
        image: broccoli,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Dinner/Lunch"
    },
    {
        _id: "3",
        name: "Cake",
        "aggregate_rating": 4.1,
        image: cake,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Cakes"
    },
    {
        _id: "4",
        name: "Toast",
        "aggregate_rating": 4.0,
        image: toast,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Breakfast"
    },
    {
        _id: "5",
        name: "Juice",
        "aggregate_rating": 4.2,
        image: juice,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "drinks"
    },
    {
        _id: "6",
        name: "Cake",
        "aggregate_rating": 4.5,
        image: cake,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Cakes"
    },
    {
        _id: "7",
        name: "Toast",
        "aggregate_rating": 4.2,
        image: toast,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Breakfast"
    },
    {
        _id: "8",
        name: "Juice",
        "aggregate_rating": 4.6,
        image: juice,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "drinks"
    }
]