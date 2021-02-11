import React from 'react'

const CategoryCard = ({category, id}) => {
    return (
        <div>
            <h1>Name: {category.name}</h1>
            <p>Id: {category.id}</p>
        </div>
    )
}

export default CategoryCard
