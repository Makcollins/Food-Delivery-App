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
        image: avocado,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Dinner/Lunch"
    },
    {
        _id: "2",
        name: "Broccoli",
        image: broccoli,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Dinner/Lunch"
    },
    {
        _id: "3",
        name: "Cake",
        image: cake,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Cakes"
    },
    {
        _id: "4",
        name: "Toast",
        image: toast,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Breakfast"
    },
    {
        _id: "5",
        name: "Juice",
        image: juice,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "drinks"
    },
    {
        _id: "3",
        name: "Cake",
        image: cake,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Cakes"
    },
    {
        _id: "4",
        name: "Toast",
        image: toast,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "Breakfast"
    },
    {
        _id: "5",
        name: "Juice",
        image: juice,
        price:100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        category: "drinks"
    }
]