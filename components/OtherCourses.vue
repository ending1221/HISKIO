<template>
<div class="pt-5 pb-44px bg-hi-courses-box min-md:pb-36px min-lg:pt-40px min-lg:pb-60px">
    <div class="mx-auto px-15px max-w-1200">
        <h2 class="mb-6 font-medium text-22px text-hi-price sn-1000:text-xl">其他人也買的課程</h2> 
        <ul class="global-card-list grid grid-cols-1 gap-x-5 min-md:grid-cols-2 min-lg:grid-cols-4 min-lg:gap-4">
            <CourseCard />
        </ul>
    </div>
</div>
</template>

<script>
import CourseCard from '~/components/CourseCard.vue';
export default {
    components: {
        CourseCard
    }
}
</script>

<style>

</style>