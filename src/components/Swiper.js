// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const MySwiper = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>    {<section>
      <h2>Визуализация Эйлерова цикла</h2>
      <p>
          Отслеживайте, как алгоритмы находят Эйлеров цикл в графе. Эйлеров цикл проходит через каждое ребро графа ровно один раз, предоставляя вам инсайты в структуру и связность вашего графа. Наблюдайте, как граф становится освещенным в процессе поиска Эйлерова цикла.
      </p>
  </section>}</SwiperSlide>
    <SwiperSlide>{<section>
      <h2>Визуализация поиска максимального потока</h2>
      <p>
          Исследуйте, как алгоритмы оптимизации находят максимальный поток в сети. Графическое представление потока и насыщенности рёбер помогут вам понять, как алгоритмы принимают решения для оптимизации передачи данных в сети.
      </p>
  </section>}</SwiperSlide>
    <SwiperSlide>{<section>
      <h2>Простота использования</h2>
      <p>
          GraphAlgoVis предоставляет интуитивно понятный пользовательский интерфейс. Добавляйте вершины и рёбра в граф, выбирайте алгоритм и наблюдайте за процессом визуализации. Наша цель - сделать изучение алгоритмов на графах увлекательным и понятным.
      </p>
  </section>}
</SwiperSlide>
    <SwiperSlide>  { <section>
      <h2>Дополнительные функции</h2>
      <p>
          Помимо основных функций, GraphAlgoVis также предоставляет дополнительные инструменты для более глубокого анализа графов. Исследуйте различные метрики, изменяйте параметры графа и создавайте свои уникальные сценарии визуализации.
      </p>
  </section>}</SwiperSlide>
    <SwiperSlide>
 { <section>
      <h2>Начните исследование прямо сейчас!</h2>
      <p>
          Не имеет значения, являетесь ли вы студентом, преподавателем или просто любителем графовых структур - GraphAlgoVis создан для вас. Начните исследование прямо сейчас и углубитесь в захватывающий мир визуализации алгоритмов на графах.
      </p>
  </section>}</SwiperSlide>
  
  </Swiper>
  );
};