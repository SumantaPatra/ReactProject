export const List = ({ person }) => {
    return (
        <>
            {
                person.map((person) => {
                    return <div key={person.id}>
                        <img src={person.image} alt='not Found' />
                    </div>
                })
            }
        </>
    )
}