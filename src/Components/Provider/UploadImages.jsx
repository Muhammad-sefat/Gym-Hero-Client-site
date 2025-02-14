export const uploadImageToImgBB = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const apiKey = "fbb4266fe165a9806e06e479214999e4";

  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(`Image upload failed: ${data.error.message}`);
    }

    return data.data.url;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    throw error;
  }
};
