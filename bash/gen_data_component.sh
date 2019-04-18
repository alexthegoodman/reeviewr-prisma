mkdir -p modules/client/components/data/$1
sed -e "s/GenComponent/$1/g" bash/gen_data_component/GenComponent.tsx > modules/client/components/data/$1/$1.tsx
sed -e "s/GenComponent/$1/g" bash/gen_data_component/GenComponent.scss > modules/client/components/data/$1/$1.scss
sed -e "s/GenComponent/$1/g" bash/gen_data_component/GenComponent.d.ts > modules/client/components/data/$1/$1.d.ts
