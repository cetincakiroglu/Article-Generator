import React from 'react'
import {Row} from 'react-bootstrap'
import ArticleCard from './ArticleCard'

function Articles({formInput}) {
    return (
        <>
            <Row>
                <ArticleCard 
                formInput={formInput}
                />
            </Row>
        </>
    )
}

export default Articles
