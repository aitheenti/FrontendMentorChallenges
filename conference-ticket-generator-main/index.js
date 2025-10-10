window.addEventListener("DOMContentLoaded", () => {
  const fileUploadInput = document.getElementById("imageUploadInput");
  const uploadSectionTrigger = document.querySelector(".uploadSection");
  const cloudUploadIcon = document.getElementById("cloudUploadIcon");
  const uploadText = document.getElementById("uploadText");
  const errorLabel = document.getElementById("fileErrorMessage");
  const eventTitle = document.getElementById("eventTitle");
  const imagePreview = document.getElementById("imagePreview");
  const removeImageButton = document.getElementById("removeBtn");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("fileErrorMessage").style.display = "none";

    const form = document.getElementById("ticketForm");
    const ticketFormData = new FormData(form);
    const fullNameInput = ticketFormData.get("fullName").trim();
    const emailInput = ticketFormData.get("email").trim();
    const usernameInput = ticketFormData.get("username").trim();
    const file = fileUploadInput.files[0];

    ticketFormData.append("fullName", fullNameInput);
    ticketFormData.append("emial", emailInput);
    ticketFormData.append("username", usernameInput);
    if (file) {
      ticketFormData.append(file);
    }

    const ticketSection = document.createElement("div");
    ticketSection.className = "ticketConfirmation";
    ticketSection.innerHTML = `
    <p>Congrats, ${fullName}! Your ticket is ready.</p>
      <p>We've emailed your ticket to ${email} and will send updates in the run up to the event.</p>
      <p><strong>Coding Conf</strong><br>Jan 31, 2025 / Austin, TX</p>
      ${
        file
          ? `<img src="${imagePreview.src}" alt="User Avatar" style="max-height:150px; border-radius:10px;" />`
          : ""
      }
    `;

    form.style.display = "none";
    document.getElementById("imageUploadContainer").style.display = "none";
    document.querySelector(".formContainer").appendChild(ticketSection);
  };

  uploadSectionTrigger.addEventListener("click", (e) => {
    if (e.target.classList.contains("no-upload-trigger")) return;
    fileUploadInput.click();
  });

  fileUploadInput.addEventListener("change", handleFile);

  ["dragenter", "dragover"].forEach((event) => {
    uploadSectionTrigger.addEventListener(event, (e) => {
      e.preventDefault();
      uploadSectionTrigger.classList.add("dragover");
    });
  });

  ["dragleave", "drop"].forEach((event) => {
    uploadSectionTrigger.addEventListener(event, (e) => {
      e.preventDefault();
      uploadSectionTrigger.classList.remove("dragover");
    });
  });

  fileUploadInput.addEventListener("drop", (e) => {
    e.preventDefault();
    const uploadedFile = e.files[0];
    if (uploadedFile) {
      validateAndHandleFile(uploadedFile);
    }
  });

  fileUploadInput.addEventListener("change", () => {
    const uploadedFileName = fileUploadInput.files[0].name;
    uploadText.textContent = `${uploadedFileName}`;
  });

  removeImageButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    fileUploadInput.value = "";
    imagePreview.src = "";
    imagePreview.style.display = "none";
    removeImageButton.style.display = "none";
    uploadText.style.display = "block";
  });

  function handleFile(e) {
    console.log(e);
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      validateAndHandleFile(uploadedFile);
    }
  }

  function validateAndHandleFile(fileToValidate) {
    errorLabel.style.display = "none";

    const allowedTypes = [`image/png`, `image/jpeg`];
    const maxFileSize = 1024000;

    if (!allowedTypes.includes(fileToValidate.type)) {
      errorLabel.textContent =
        "Only PNG and JPEG extensions are supported at the moment.";
      errorLabel.style.display = "block";
      return;
    }

    if (fileToValidate.size > maxFileSize) {
      errorLabel.textContent = "Maximum Image size allowed in 1MB";
      errorLabel.style.display = "block";
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
      cloudUploadIcon.style.display = "none";
      removeImageButton.style.display = "block";
      uploadText.style.display = "none";
    };
    reader.readAsDataURL(fileToValidate);
  }

  form.addEventListener("submit", handleSubmit);
});
