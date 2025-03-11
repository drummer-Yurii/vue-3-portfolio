<script setup>
import { ref } from 'vue';
import SectionHeader from '@/components/UI/SectionHeader.vue';
import ProjectCard from '@/components/UI/ProjectCard.vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation } from 'swiper/modules';

const navigationOptions = {
  prevEl: '.swiper-prev',
  nextEl: '.swiper-next',
};

const projects = ref([
    {
        title: 'Portfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eius.',
        image: '/project1.jpg',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '/',
    },
    {
        title: 'Portfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eius.',
        image: '/project2.jpg',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '/',
    },
    {
        title: 'Portfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eius.',
        image: '/project3.png',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '/',
    },
    {
        title: 'Portfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eius.',
        image: '/project4.png',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '/',
    },
    {
        title: 'Portfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eius.',
        image: '/project5.png',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '/',
    },
    {
        title: 'Portfolio Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eius.',
        image: '/project6.jpg',
        tags: ['HTML', 'CSS', 'Javascript'],
        liveLink: '/',
        codeLink: '/',
    },
]);
</script>

<template>
  <section id="projects" class="relative w-11/12 px-16 mx-auto">
    <SectionHeader title="My Projects" />
    <button
      class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>
    <button
      class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
    </button>
    <swiper
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :navigation="navigationOptions"
      loop
      :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-32"
    >
      <swiper-slide class="max-w-[300px]" v-for="(project, index) in projects" :key="index">
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="'src/assets/images/' + project.image"
          :tags="project.tags"
          :liveLink="project.liveLink"
          :codeLink="project.codeLink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
