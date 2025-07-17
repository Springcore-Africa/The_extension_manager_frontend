import { useRef, useState } from "react";
import AgroProcessorAsidebar from "../components/AgroProcessorAsidebar";
import ProcessorDp from "../assets/farmer-dp.jpeg";

const AProfile = () => {
  const [profilePic, setProfilePic] = useState(ProcessorDp);
  const fileInputRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);

  const [processor, setProcessor] = useState({
    firstname: "Jane",
    lastname: "Doe",
    email: "janedoe@agropro.com",
    phone: "+234 701 123 4567",
    location: "Kaduna, Nigeria",
    about:
      "Dedicated agro-processor focused on turning fresh produce into quality food products. Passionate about creating value, reducing waste, and empowering local farmers through sustainable processing solutions.",
  });

  const handleProfilePicChange = (e) => {
    if (isReadOnly) return;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfilePic(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProcessor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setIsReadOnly(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <div className="flex min-h-screen bg-green-50">
        <AgroProcessorAsidebar />

        {/* FIXED: Removed bg-green-50 here to avoid green margin edge */}
        <main className="flex-1 p-6 md:p-10">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-green-800">Processor Profile</h1>
              {isReadOnly && (
                <button
                  onClick={() => setIsReadOnly(false)}
                  className="bg-green-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-900 transition"
                >
                  Edit Profile
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image */}
                <div className="relative group">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-green-600 object-cover shadow cursor-pointer"
                    onClick={() => !isReadOnly && fileInputRef.current.click()}
                    title="Click to change profile picture"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    disabled={isReadOnly}
                  />
                  {!isReadOnly && (
                    <span className="absolute bottom-2 right-2 bg-white text-green-700 rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition">
                      ✏️
                    </span>
                  )}
                </div>

                {/* Profile Fields */}
                <div className="flex-1 w-full space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["firstname", "lastname", "email", "phone", "location"].map((field, idx) => (
                      <div key={field} className={idx > 3 ? "md:col-span-2" : ""}>
                        <label className="block font-medium text-green-800 mb-1 capitalize">
                          {field.replace(/([A-Z])/g, " $1")}
                        </label>
                        {isReadOnly ? (
                          <p className="p-3 bg-green-50 border border-green-100 rounded-lg text-green-900">
                            {processor[field]}
                          </p>
                        ) : (
                          <input
                            type="text"
                            name={field}
                            value={processor[field]}
                            onChange={handleChange}
                            className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block font-medium text-green-800 mb-1">About Me</label>
                    {isReadOnly ? (
                      <p className="p-3 bg-green-50 border border-green-100 rounded-lg text-green-900">
                        {processor.about}
                      </p>
                    ) : (
                      <textarea
                        name="about"
                        value={processor.about}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                      />
                    )}
                  </div>

                  {!isReadOnly && (
                    <button
                      type="submit"
                      className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition mt-4"
                    >
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
              onClick={handleCloseSuccess}
              aria-label="Close"
            >
              &times;
            </button>
            <svg
              className="w-16 h-16 text-green-600 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="#dcfce7" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4"
                stroke="#16a34a"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>
            <h2 className="text-xl font-bold text-green-700 mb-2 text-center">
              Profile Updated!
            </h2>
            <p className="text-gray-700 text-center mb-4">
              Your changes have been saved successfully.
            </p>
            <button
              onClick={handleCloseSuccess}
              className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AProfile;
