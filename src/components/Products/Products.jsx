import React from 'react';
import { ProductsContainer, ProductsGrid, ProductCard } from './Products.styles';
import { SectionTitle, SectionSubtitle } from '../../App.styles';
import { FaArrowRight, FaCar, FaHome, FaHeartbeat, FaUserShield, FaPlane, FaBriefcase, FaMobile, FaPaw } from 'react-icons/fa';

const ProductsSection = () => {
  const products = [
    { 
      icon: <FaCar />,
      title: 'Seguro Auto',
      description: 'Proteção completa para seu veículo contra colisões, roubos e danos.'
    },
    { 
      icon: <FaHome />,
      title: 'Seguro Residencial',
      description: 'Cobertura para sua casa contra incêndios, roubos e desastres naturais.'
    },
    { 
      icon: <FaHeartbeat />,
      title: 'Seguro Saúde',
      description: 'Planos individuais ou familiares com ampla rede de hospitais.'
    },
    { 
      icon: <FaUserShield />,
      title: 'Seguro de Vida',
      description: 'Proteção financeira para sua família em caso de imprevistos.'
    },
    { 
      icon: <FaPlane />,
      title: 'Seguro Viagem',
      description: 'Cobertura internacional para emergências médicas e extravio de bagagem.'
    },
    { 
      icon: <FaBriefcase />,
      title: 'Seguro Empresarial',
      description: 'Proteção para seu negócio contra riscos operacionais e patrimoniais.'
    },
    { 
      icon: <FaMobile />,
      title: 'Seguro Celular',
      description: 'Cobertura para danos acidentais e roubo de seu aparelho.'
    },
    { 
      icon: <FaPaw />,
      title: 'Seguro Pet',
      description: 'Planos de saúde para seu animal de estimação.'
    }
  ];

  return (
    <ProductsContainer id="products">
      <SectionTitle>
        Nossos <span>produtos</span>
      </SectionTitle>
      <SectionSubtitle>
        Oferecemos as melhores soluções em seguros para todas as necessidades
      </SectionSubtitle>
      
      <ProductsGrid>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <div className="icon">{product.icon}</div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <a href="#">
              Saiba mais <FaArrowRight />
            </a>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default ProductsSection;