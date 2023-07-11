'use client';

import { useState } from 'react';
import { FormEventHandler } from 'react/ts5.0';
import useSWR from 'swr';
import { getPostsBySearch } from '../app/services/getPosts';

export function PostSearch() {
  const { mutate } = useSWR('posts')
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}