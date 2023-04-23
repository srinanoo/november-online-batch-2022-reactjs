function FuncMain() {

    const projectData = [
        {
            "img": "images/background.jpeg",
            "title": "Project 1",
            "description": "Project 1 Description goes here...",
        },
        {
            "img": "images/background.jpeg",
            "title": "Project 2 Title",
            "description": "Project 2 Description goes here...",
        },
        {
            "img": "images/background.jpeg",
            "title": "Project 3 Title",
            "description": "Project 3 Description goes here...",
        },
        {
            "img": "images/background.jpeg",
            "title": "Project 4",
            "description": "Project 4 Description goes here...",
        },
        {
            "img": "images/background.jpeg",
            "title": "Project 5",
            "description": "Project 5 Description goes here...",
        },
        {
            "img": "images/background.jpeg",
            "title": "Project 6",
            "description": "Project 6 Description goes here...",
        },
    ]
    return (
        <>
            <div className="row2">
                <h3>Projects / Experiences</h3>
                <div className="row2section1">
                    {
                        projectData.map((v, i) => {
                            return (
                                <div key={i}>
                                    <img src={v.img} alt={v.title} /><br />
                                    {v.title}<br />
                                    {v.description}
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default FuncMain;