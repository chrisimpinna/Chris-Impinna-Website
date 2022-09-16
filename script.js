// Creates a new instance of the Github object exposed by Github.js
var github = new Github({
  username: 'deepspaceIX',
  password: '382727aA',
  auth: 'basic'
});
 
// Creates an object representing the repository you want to work with
var repository = github.getRepo('deepspaceIX', 'deepspace9');
 
// Creates a new file (or updates it if the file already exists)
// with the content provided
repository.write(
   'main', // e.g. 'master'
   'text.txt', // e.g. 'blog/index.md'
   'shut up', // e.g. 'Hello world, this is my new content'
   'shut up', // e.g. 'Created new index'
   function(err) {}
);
