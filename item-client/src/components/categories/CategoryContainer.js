import React, {useEffect, useState} from 'react'
import CategoryCard from './CategoryCard';

const CategoryContainer = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = async (e) => {
        const dummyData = 
        [
            {
                "id": 1,
                "name": "Corsair PC Build"
            },
            {
                "id": 2,
                "name": "Razor PC Build"
            }
        ]

        setCategories(dummyData);
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div>
            {categories.map(cat => (
                <CategoryCard category={cat} id={cat.id} />
            ))}
        </div>
    )
}

export default CategoryContainer
