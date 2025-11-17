<script setup>
import Leaf from "../components/icons/leaf.vue";
</script>

<template>
  <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div
        class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1"
      >
        <div
          class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex"
        >
          <div
            class="w-full flex-col justify-start lg:items-start items-center gap-4 flex"
          >
            <h2
              class="text-dark-900 dark:text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
            >
              Connecting South Africa’s Cannabis Industry — Directly &
              Transparently
            </h2>
            <p
              class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"
            >
              High Exchange is a B2B marketplace that streamlines how licensed
              growers and retailers trade. As the legal cannabis market expands,
              we bring structure to a supply chain that’s often fragmented and
              inefficient.
            </p>
            <h2
              class="py-4 white-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
            >
              A Structured Platform for a Growing Industry
            </h2>
            <p
              class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"
            >
              Traditional sourcing relies on informal networks, inconsistent
              quality, and unreliable pricing. High Exchange provides the
              digital infrastructure the industry has been missing — a trusted
              platform where verified growers and retailers trade with
              confidence.
            </p>
          </div>
        </div>
        <Leaf class="w-84 h-84 lg:w-96 lg:h-96" />
      </div>
    </div>
  </section>
  <section class="py-2 relative pb-4">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <h2
        class="text-gray-900 dark:text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
      >
        Direct, Verified Sourcing
      </h2>
      <div
        class="w-full justify-start items-center gap-8 grid lg:grid-cols-3 grid-cols-1"
      >
        <ul class="list-disc">
          <h3>Our marketplace offers:</h3>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Access a curated network of verified growers
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Verified grower profiles
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Real-time product availability
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Batch-level product details
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Traceable, compliant transactions
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Reliable supply for retailers. Consistent demand for growers.
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Compliance & Quality Built In
          </li>
        </ul>

        <ul class="list-disc">
          <h3>We streamline regulatory requirements with:</h3>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Digital COAs and batch documentation
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Automated chain-of-custody
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Licensing verification
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Quality ratings and feedback
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Every trade is secure, transparent, and auditable.
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Tools That Power Growth
          </li>
        </ul>

        <ul class="list-disc">
          <h3>Our platform helps businesses scale with:</h3>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Dynamic product catalogues
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Secure messaging and negotiation
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            End-to-end order and fulfilment tracking
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            Analytics and performance insights
          </li>
          <li
            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left"
          >
            One platform to manage sourcing, operations, and compliance.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "About",
};
</script>
<style lang="css">
.list-disc li {
  margin-left: 1rem;
}
</style>
