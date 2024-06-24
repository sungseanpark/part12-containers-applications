const Todo = ({ text, done }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
        <span>
            {text} 
        </span>
        {done ? (
            <>
            <span>This todo is done</span>
            <span>
                <button> Delete </button>
            </span>
            </>
        ) : (
            <>
            <span>
                This todo is not done
            </span>
            <span>
                <button> Delete </button>
                <button> Set as done </button>
            </span>
            </>
        )}
        </div>
    )
}

export default Todo