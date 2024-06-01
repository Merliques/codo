const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzRjN2VmMTYxYjQ3MTA3MTlmMzNjMzk3NTg2YjhmOSIsInN1YiI6IjY2NWE4ODRiZWFlOGVhZTdmZWFmMDhmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nJIpfjht3fbzKbFw8leU22-l4SrAJLVnTM7OGKXBCio'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));