import { useState, useEffect } from "react";
import { RepositoryITem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { response } from "express";



const repository ={
    name: 'unfomr',
    description: 'Forms in REact',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then (data => console.log(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de reposiórios</h1>

            <ul>
                <RepositoryITem repository = {repository}   />
                <RepositoryITem repository = {repository} />
                <RepositoryITem repository = {repository} />
                <RepositoryITem repository = {repository} />
            </ul>
        </section>
    );
}