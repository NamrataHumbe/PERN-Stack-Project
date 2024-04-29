import notfound from '../Images/NotFound.jpg';

const NotFound = () => {
    return (
        <div style={{ width: '100vw', height: '91vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={notfound} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Not Found" />
        </div>
    )
}

export default NotFound;