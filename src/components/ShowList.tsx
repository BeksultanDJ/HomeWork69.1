import React from 'react';

interface ShowListProps {
    suggestions: { id: string; name: string }[];
    handleSuggestionClick: (suggestion: string, id: string) => void;
}

const ShowList: React.FC<ShowListProps> = ({ suggestions, handleSuggestionClick }) => {
    if (!suggestions || suggestions.length === 0) {
        return <div>No suggestions found.</div>;
    }

    return (
        <div className="searchList">
            {suggestions.map((item) => (
                <p key={item.id} onClick={() => handleSuggestionClick(item.name, item.id)}>
                    {item.name}
                </p>
            ))}
        </div>
    );
};

export default ShowList;
