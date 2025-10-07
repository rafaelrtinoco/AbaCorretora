import React from 'react';
import { BlogContainer, BlogGrid, BlogCard } from './Blog.styles';
import { SectionTitle, SectionSubtitle } from '../../App.styles';

const BlogSection = () => {
  const articles = [
    {
      image: '/assets/blog/post1.jpg',
      category: 'Dicas',
      title: 'Como escolher o melhor seguro para seu carro',
      link: '#'
    },
    {
      image: '/assets/blog/post2.jpg',
      category: 'Guia',
      title: '10 coisas que você precisa saber antes de contratar um seguro saúde',
      link: '#'
    },
    {
      image: '/assets/blog/post3.jpg',
      category: 'Notícia',
      title: 'Mudanças na legislação de seguros em 2023',
      link: '#'
    }
  ];

  return (
    <BlogContainer id="blog">
      <SectionTitle>
        Blog <span>Aba Seguros</span>
      </SectionTitle>
      <SectionSubtitle>
        Acompanhe nossas dicas e novidades sobre o mundo dos seguros
      </SectionSubtitle>
      
      <BlogGrid>
        {articles.map((article, index) => (
          <BlogCard key={index}>
            <div className="image-container">
              <img src={article.image} alt={article.title} loading="lazy" />
              <span className="category">{article.category}</span>
            </div>
            <h3>{article.title}</h3>
            <a href={article.link} className="read-more">
              Ler artigo →
            </a>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogSection;