function Table() {
    const array = [
        {
            head: 'jano',
            head: 'papu',
            head: 'messi',
            head: 'logi',
        },
        {
        nose: 'nashe',
        nose: 'anashe',
        nose: 'afanashe',
        nose: 'afanashex',
    },
    {
        trola: 'trola',
        trola: 'mia farias',
        trola: 'damico',
        trola: 'bartuchi'
    },
    
    ]

    return (
        <div>
            {array.map(nashe => (
                <div>
            <thead>
                <tr>
                    <th>
                        {nashe.head}
                    </th>
                    <th>
                        {nashe.head}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {nashe.nose}
                    </td>
                    <td>
                        {nashe.trola}
                    </td>
                </tr>
            </tbody>
            </div>
            ))}
        </div>
    )
}

export default Table;