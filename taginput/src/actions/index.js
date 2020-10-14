let nextToDoId = 0;
export const deleteTag = (id) => ({
  type: "delete_tag",
  id: id,
});

export const addTag = (text) => ({
  type: "add_tag",
  id: nextToDoId++,
  text,
});
