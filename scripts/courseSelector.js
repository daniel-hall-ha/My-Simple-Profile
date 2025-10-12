document.addEventListener('DOMContentLoaded', () => {

  const courses = document.querySelectorAll(".cert");
  const course_details = Array.from(document.querySelectorAll(".course-completion"));

  courses.forEach(course => {
    course.addEventListener('click', () => {
      // Remove 'active' from all other certs
      courses.forEach(c => c.classList.remove('active'));
      
      // Add 'active' to the clicked one
      course.classList.add('active');

      // Remove 'active' from all other course-completion
      course_details.forEach(d => d.classList.remove('active'));

      // Find the detail ul with the same id as clicked cert
      const active_detail = course_details.find(f => course.dataset.id === f.id);
      
      active_detail.classList.add('active');
    });
  });
});
