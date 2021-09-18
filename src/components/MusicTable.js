import './MusicTable.css';

const MusicTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Danceability</th>
                    <th>Energy</th>
                    <th>Mode</th>
                    <th>Acousticness</th>
                    <th>Tempo</th>
                    <th>Duration MS</th>
                    <th>Num Section</th>
                    <th>Num Segments</th>
                </tr>
            </thead>
            <tbody>
                {props.music.map((singleTrack, index) => (
                    <tr key={singleTrack['id']}>
                        <td>{index + 1}</td>
                        <td>{singleTrack['id']}</td>
                        <td>{singleTrack['title']}</td>
                        <td>{singleTrack['danceability']}</td>
                        <td>{singleTrack['energy']}</td>
                        <td>{singleTrack['mode']}</td>
                        <td>{singleTrack['acousticness']}</td>
                        <td>{singleTrack['tempo']}</td>
                        <td>{singleTrack['duration_ms']}</td>
                        <td>{singleTrack['num_sections']}</td>
                        <td>{singleTrack['num_segments']}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MusicTable;