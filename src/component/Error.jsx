export default function Error({ error }) {
    return (
        <ul>
            <li style={{
                color: 'red',
            }}>
                {error}
            </li>
        </ul>
    )
}