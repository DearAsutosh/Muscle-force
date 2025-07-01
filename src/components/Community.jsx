import React from 'react';

const communityPosts = [
  {
    user: "Amit",
    message: "Just finished a killer leg workout! 💪 Anyone else training legs today?",
    time: "2 hours ago",
  },
  {
    user: "Priya",
    message: "Does anyone have tips for increasing protein intake?",
    time: "1 hour ago",
  },
  {
    user: "Rahul",
    message: "Loving the progress charts! Keeps me motivated every week.",
    time: "30 minutes ago",
  },
];

const Community = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-md p-6 mt-10">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">Community Feed</h2>
      <ul className="space-y-4">
        {communityPosts.map((post, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-blue-300">{post.user}</span>
              <span className="text-xs text-gray-400">{post.time}</span>
            </div>
            <p className="text-gray-200">{post.message}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center text-gray-500 text-sm">
        (Posting coming soon!)
      </div>
    </div>
  );
};

export default Community;