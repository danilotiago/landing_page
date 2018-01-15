<template>
  <div id="app">
    <div class="container">
        <lp-header :name="'Nome de produto teste'" :image="'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPGQwMDRsUFRYWIB0iIiAdHx8kJSosGSYlJx8rITYlLiktLj4xIyUzODUtNygtLisBCgoKDg0OGxAQGS0dFR0rKy0tKy03Ky0rLSs3LS0tKystNy0tKzItKysrLS03LSstKy0rKysrLSsrKysrKysrK//AABEIAC0ALQMBEQACEQEDEQH/xAAaAAADAAMBAAAAAAAAAAAAAAAFBgcAAQQD/8QAMxAAAgAEBQICBgsAAAAAAAAAAQIAAwQRBQYSITETIlGBB0GRwdHhMjZSYWJjcXOhstL/xAAZAQACAwEAAAAAAAAAAAAAAAAAAwECBAX/xAAiEQACAQMEAgMAAAAAAAAAAAAAAQIDETEEEiFRE0EiMmH/2gAMAwEAAhEDEQA/ALhEABMcxAUc5FmF+myX0oNy1/X7IZGnuwV32F6tzRSyFbXOrZZG95csNt5mLPR1SVVuB6jPtD09a1VfoDWv0uduNj5wt6eqvZdSuUDLdacRwWlq9ZfqrcMwsSL7X++0USsVCsWA1AgFHOs0SqmQzcaPeY16PliqiJ9jk93lOae1rfRI8o6Th+iEKTT5ySJlN1ZxkK2vpFjoDEWLWB5tteESpjoyL36Pvqfhg8JIEcuSsxwxRUDURYBSznQz8SrKSlpSgmFWbvawsLxo089oupgXWyRi7bh6S37p+EblqoiPE+wXV+jjGHaYZb0VnI5mn/MVlqYstGm17KJkUFMq4eh5WXp9htHOlk0jBFQNQAxVzbKSdW0qzASolsdjb9N7GL0siKzshVq6REdwiv07nvLm44sLW39e9xwI2xcjEpLsH4hRU7OySHmzEK3uwsQ3wiz3EOavkpGSl0ZZoU+ypH8mOfLJ04sORVFzIGR7FbNbaK6mNrnpNt47iBTsZNXHcgPLWXUTSk1hLWx72UkfOHKtNv6mWNCCt8jkWklNNIdig8dPMbLtxwIklxyOuVV04HIHgW/sY5zOxTXAXiBhkAAPMdEs/o1BbdezSVuCDv7oXJAoqWQUmGqAO9Tb8sQuTd8l1Tj0ewoJYXfSbfgES5y7J8UOhgwuQKejlywb8m4FuTDxdrHZAB//2Q=='"></lp-header>
        <lp-body></lp-body>
    </div>
  </div>
</template>

<script>
import lpHeader from "./Header";
import lpBody from "./Body";

export default {
    components: {lpBody, lpHeader},
    name: 'app',
    data () {
        return {
        }
    }
}
</script>
