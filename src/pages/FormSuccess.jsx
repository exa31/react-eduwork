export default function FormSuccess({ name, setSuccess, success }) {
    return (
        <div id="regist" style={{
            textAlign: 'center',
        }}>
            <h1>{`Form submitted successfully ${name}!!`}</h1>
            <button onClick={() => setSuccess(!success)} className="btnForm">Input ulang?</button>
        </div>
    );
}

