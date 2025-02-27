import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CommentGrid = () => {
  
  const video = useSelector((state) => state.videos.selectedVideo);
  const [comments, setComments] = useState(video.commentaires);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      const newComment = { nom: name, texte: text, rating: rating };
      setComments([...comments, newComment]);
      setName('');
      setText('');
      setRating(0);
    }
  };

  return (
    <div className="comment-grid">
      <h1 className="text-xl font-semibold mb-4">Commentaires</h1>

      {/* Formulaire de commentaire */}
      <div className="mb-6">
        <input
          type="text"
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-none"
          placeholder="Votre nom..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-none"
          placeholder="Ajouter un commentaire..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          onClick={handleAddComment}
        >
          Ajouter un commentaire
        </button>
      </div>
      <br /><br />

      {/* Liste des commentaires */}
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-2">
              {comment.nom.charAt(0)}
            </div>
            <strong className="text-white">{comment.nom}</strong>
          </div>
          <p className="text-gray-300">{comment.texte}</p>
          <div className="flex mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={`text-yellow-400 ${i < comment.rating ? 'filled' : ''}`}>
                ★
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentGrid;